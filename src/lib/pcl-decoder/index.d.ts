/* tslint:disable */
/**
* @returns {any} 
*/
export function get_memory(): any;
/**
* @returns {number} 
*/
export function get_memory_width(): number;
/**
*/
export class PCLDecoder {
  free(): void;
/**
* @returns {PCLDecoder} 
*/
  constructor();
/**
* @returns {number} 
*/
  get_copy_memory_ptr(): number;
/**
* @returns {number} 
*/
  get_position_memory_ptr(): number;
/**
* @returns {number} 
*/
  get_color_memory_ptr(): number;
/**
* @param {number} num_points 
* @param {number} point_step 
* @param {number} offset_x 
* @param {number} offset_y 
* @param {number} offset_z 
* @param {number} offset_rgb 
* @param {number} offset_intensity 
* @param {boolean} use_intensity_channel 
* @param {boolean} use_rainbow 
*/
  compute(num_points: number, point_step: number, offset_x: number, offset_y: number, offset_z: number, offset_rgb: number, offset_intensity: number, use_intensity_channel: boolean, use_rainbow: boolean): void;
}
