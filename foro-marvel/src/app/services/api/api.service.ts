import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const TS = '1';
const APIKEY = environment.apiKey;
const HASH = environment.hash;
const API_URL = `https://gateway.marvel.com:443/v1/public/`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Esta función devuelve un listado de personajes
   * @param {number} offset - número de personajes a saltar
   * @param {number} limit - número de personajes a mostrar
   * @param {string} nameStartsWith - nombre del personaje a buscar
   * @returns {Observable<any>} - Observable con el listado de personajes
   */
  getCharacter(
    offset: number,
    limit: number,
    nameStartsWith: string
  ): Observable<any> {
    let address =
      API_URL +
      `characters?ts=${TS}&apikey=${APIKEY}&hash=${HASH}&offset=${offset}&limit=${limit}`;
    if (nameStartsWith !== '') {
      address += `&nameStartsWith=${nameStartsWith}`;
    }
    return this.http.get(address);
  }

  /**
   * Esta función devuelve un personaje
   * @param {number} id - id del personaje a mostrar
   * @returns {Observable<any>} - Observable con el personaje
   */
  getCharacterById(id: number): Observable<any> {
    let address =
      API_URL + `characters/${id}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`;
    return this.http.get(address);
  }

  /**
   * Esta función devuelve un listado de comics ordenados por el parámetro indicado
   * (añadir un "-" delante para verlos de forma descendente)
   * @param {any} orderBy - parámetro por el que se ordenarán los comics
   * @returns {Observable<any>} - Observable con el listado de comics
   */
  getComicsOrderedBy(orderBy: string): Observable<any> {
    let address =
      API_URL +
      `comics?ts=${TS}&apikey=${APIKEY}&hash=${HASH}&orderBy=-${orderBy}`;
    return this.http.get(address);
  }

  /**
   * Esta función devuelve el listado de comics de un personaje
   * @param {string} url - url de la petición para obtener los comics relacionados
   * @returns {Observable<any>} - Observable con la serie
   */
  getComicsByURL(url: string): Observable<any> {
    let address = `${url}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`;
    return this.http.get(address);
  }

  /**
   * Esta función devuelve un listado de eventos
   * @returns {Observable<any>} - Observable con el comic
   */
  getEvents(): Observable<any> {
    let address =
      API_URL + `events?ts=${TS}&apikey=${APIKEY}&hash=${HASH}&limit=100`;
    return this.http.get(address);
  }

  /**
   * Esta función devuelve el listado de eventos de un personaje
   * @param {string} url - url de la petición para obtener los eventos relacionados
   * @returns {Observable<any>} - Observable con la serie
   */
  getEventsByURL(url: string): Observable<any> {
    let address = `${url}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`;
    return this.http.get(address);
  }

  /**
   * Esta función devuelve el listado de series de un personaje
   * @param {string} url - url de la petición para obtener las series relacionados
   * @returns {Observable<any>} - Observable con la serie
   */
  getSeriesByURL(url: string): Observable<any> {
    let address = `${url}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`;
    return this.http.get(address);
  }
}
