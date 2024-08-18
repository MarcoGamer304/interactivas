import {PlaneGeometry, MeshBasicMaterial, Mesh, MeshStandardMaterial, DoubleSide} from 'three'

const geometry = new PlaneGeometry( 15, 15 );
const material = new MeshBasicMaterial( {color: 0xffff00, side: DoubleSide} );
const plane = new Mesh( geometry, material );

plane.rotation.x = Math.PI * .5

export default plane;