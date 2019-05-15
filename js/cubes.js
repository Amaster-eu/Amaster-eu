let scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 10, 15);
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create elements here:
function randint(min, max) {
    return Math.floor(Math.random() * max) + min
}

/**
 * @return {string}
 */
function RGB(r, g, b) {
    function colorcheck(c) {
        if (c > 255) {
            c = 255
        }
        if (c < 0) {
            c = 0
        }
        return c
    }

    r = colorcheck(r);
    g = colorcheck(g);
    b = colorcheck(b);
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "0x" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

function rgb2color(r, g, b) {
    return rgb2hex(RGB(r, g, b))
}

function sin(t, h) {
    return Math.sin(t) * h
}

let cubes = [];
for (let x = -6; x <= 6; x++) {
    for (let z = -6; z <= 6; z++) {
        let cube = [];
        let geometry = new THREE.BoxGeometry(1, 1, 1, 6, 6, 6);
        let smooth = geometry.clone();
        let subdiv = 1;
        let modifier = new THREE.SubdivisionModifier(subdiv);
        let ccolor = 'blue';
        modifier.modify(smooth);
        if (Math.random() > 0.75) {
            cube.colored = true
        } else {
            ccolor = 'black';
            cube.colored = false
        }
        cube.material = new THREE.MeshPhongMaterial({color: ccolor});
        cube.mesh = new THREE.Mesh(smooth, cube.material);
        scene.add(cube.mesh);
        cube.mesh.position.x = x;
        cube.mesh.position.z = z;
        cube.height = randint(1, 10) / 10;
        cube.aniOffset = randint(1, 400) / 100;
        cubes.push(cube);
    }
}

for (let x = -5; x <= 5; x += 5) {
    for (let z = -5; z <= 5; z += 5) {
        let light = new THREE.PointLight('white', 1, 7.5);
        light.position.set(x, 2, z);
        scene.add(light);
    }
}
//end of elements

camera.position.y = 8;
camera.position.x = 6;
camera.position.z = 4;
lookAt = new THREE.Vector3(0, 0, 0);
camera.lookAt(lookAt);
let render = function () {
    requestAnimationFrame(render);
    mainloop();
    renderer.render(scene, camera);
};
let color = {};
color.r = 0;
color.g = 0;
color.b = 255;
color.rs = 0;
color.gs = 0;
color.bs = 0;
color.rt = 0;
color.gt = 0;
color.bt = 255;
let time = 0;

function mainloop() {
    time += 1;
    camera.position.y += sin((time * 0.005) + 10, 0.005);
    camera.position.x += sin((time * 0.004) + 5, 0.005);
    camera.position.z += sin((time * 0.006), 0.005);
    camera.rotation.z += sin((time * 0.0045) + 15, 0.002);
    lookAt = new THREE.Vector3(0, 0, 0);
    //camera.lookAt(lookAt)
    //console.log(camera.position)
    if (Math.abs(color.r - color.rt) >= 5) {
        color.r += color.rs
    }
    if (Math.abs(color.g - color.gt) >= 5) {
        color.g += color.gs
    }
    if (Math.abs(color.b - color.bt) >= 5) {
        color.b += color.bs
    }
    if (Math.abs(color.r - color.rt) < 5 &&
        Math.abs(color.g - color.gt) < 5 &&
        Math.abs(color.b - color.bt) < 5) {
        color.rt = randint(0, 255);
        color.gt = randint(0, 255);
        color.bt = randint(0, 255);
        let divisor = 20;
        if (color.rt > color.r) {
            color.rs = randint(5, 45) / divisor
        } else {
            color.rs = -randint(5, 45) / divisor
        }
        if (color.gt > color.g) {
            color.gs = randint(5, 45) / divisor
        } else {
            color.gs = -randint(5, 45) / divisor
        }
        if (color.bt > color.b) {
            color.bs = randint(5, 45) / divisor
        } else {
            color.bs = -randint(5, 45) / divisor
        }
    }

    let r = Math.round(color.r);
    let g = Math.round(color.g);
    let b = Math.round(color.b);

    for (let i = 0; i < cubes.length; i++) {
        let cube = cubes[i];
        cube.mesh.position.y = sin((time / 100) + cube.aniOffset, cube.height);
        if (cube.colored) {
            cube.mesh.material.color.setHex(rgb2color(r, g, b));
        }
    }
}

render();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
