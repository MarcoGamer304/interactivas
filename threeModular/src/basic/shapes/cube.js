import { BoxGeometry, MeshBasicMaterial, Mesh, MeshStandardMaterial } from 'three'

class Cube {
    constructor(positionParam, colorParam) {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshStandardMaterial({ color: colorParam });
        this.cube = new Mesh(geometry, material);
        this.cube.position.y = positionParam;   
    }

    getMesh() {
        return this.cube;  
    }
}

export default Cube;