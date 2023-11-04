import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../../services/bbdd-local/sqlite.service';
import { Character } from '../../models/character.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-local-character-list',
  templateUrl: './local-character-list.component.html',
  styleUrls: ['./local-character-list.component.css'],
})
export class LocalCharacterListComponent implements OnInit {
  constructor(
    private sql: SqliteService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  public addCharacterForm = this.fb.group({
    name: ['', Validators.required], //se ponene corchetes si vamos a poner varias validaciones
    description: [''],
    thumbnail: [new File([], '')],
  });
  imageSrc: string | ArrayBuffer | null = '' || 'assets/uploads/no-image.png';

  // Variables para la paginación
  totalCharacters = 0;
  posicionactual = 0;
  registrosporpagina = 10;

  // Variable para almacenar los personajes
  characters: Character[] = [];
  displayCharacters: any[] = [];

  // Variable para mostrar el spinner de carga
  loading: boolean = true;

  submitted = false;

  numPersonajesMostrados = 10;

  ngOnInit(): void {
    // Cargamos los personajes al iniciar el componente
    this.getCharacter();
  }

  // Función para obtener los personajes
  getCharacter() {
    this.loading = true;
    this.sql
      .getCharacter(this.posicionactual, this.numPersonajesMostrados)
      .subscribe(
        (data: any) => {
          // Comprobamos si estamos en una página vacia, si es así entonces retrocedemos una página si se puede
          if (data.character.length === 0) {
            if (this.posicionactual > 0) {
              this.posicionactual =
                this.posicionactual - this.registrosporpagina;
              if (this.posicionactual < 0) {
                this.posicionactual = 0;
              }
              this.getCharacter();
            } else {
              // Si no hay personajes, vaciamos el array y ponemos el total a 0
              this.characters = [];
              this.totalCharacters = 0;
            }
          } else {
            // Si hay personajes, los cargamos
            this.loading = false;
            this.characters = data.character;
            this.totalCharacters = data.total;
            this.displayCharacters = []; //Reseteamos el array de personajes a mostrar antes de rellenarlo
            for (let index = 0; index < data.character.length; index++) {
              let path =
                'assets/uploads/' +
                data.character[index].thumbnail.split('.')[0];
              let extension = data.character[index].thumbnail.split('.')[1];
              this.displayCharacters[index] = {
                id: data.character[index].ID,
                name: data.character[index].name,
                description: data.character[index].description,
                thumbnail: {
                  path: path,
                  extension: extension,
                },
                modified: data.character[index].modified,
              };
            }
          }
        },
        (error: any) => {
          // Si hay un error, lo mostramos por consola
          //TODO: Mostrar error en pantalla
          console.log(error);
          this.loading = false;
        }
      );
  }

  // Función para cambiar de página
  cambiarPagina(pagina: number) {
    // Comprobamos que la página no sea menor que 0
    pagina = pagina < 0 ? 0 : pagina;
    // Comprobamos que la página no sea mayor que el total de páginas
    this.posicionactual =
      (pagina - 1) * this.registrosporpagina >= 0
        ? (pagina - 1) * this.registrosporpagina
        : 0;
    this.getCharacter();
  }

  onSubmit() {
    this.submitted = true;

    if (this.addCharacterForm.valid) {
      this.addCharacterForm.get('name')?.markAsTouched();

      const thumbnail = this.addCharacterForm.get('thumbnail')?.value;
      const formData = new FormData();

      if (thumbnail?.name !== '') {
        if (thumbnail) formData.append('files', thumbnail);

        this.sql.subirImagen(formData).subscribe(
          (data: any) => {
            console.log(data);
          },
          (error: any) => {
            console.log(error);
          }
        );
      }

      let obj = {
        name: this.addCharacterForm.get('name')?.value,
        description: this.addCharacterForm.get('description')?.value,
        thumbnail: this.addCharacterForm.get('thumbnail')?.value?.name,
      };
      this.sql.addCharacter(obj).subscribe(
        (data: any) => {
          this.addCharacterForm.reset();
          const closeBtn = document.getElementById('close-modal');
          closeBtn?.click();
          this.getCharacter();
          this._snackBar.open('Personaje añadido con éxito.', 'Cerrar', {
            duration: 5 * 1000,
            panelClass: 'success-snackbar',
          });
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      // mostrar la imagen del file en el preview #imageResult
      this.addCharacterForm.patchValue({
        thumbnail: file,
      });
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => (this.imageSrc = e.target.result);
    }
  }

  showFileName(event: any) {
    const infoArea = document.getElementById('upload-label');
    let inputEl = event.srcElement;
    if (inputEl.files[0]) {
      let fileName = inputEl.files[0].name;
      if (infoArea !== null) {
        infoArea.textContent = 'Imagen: ' + fileName;
      }
    }
  }

  autoGrow(element: any) {
    element.target.style.height = '5px';
    element.target.style.height = element.target.scrollHeight + 'px';
  }
}
