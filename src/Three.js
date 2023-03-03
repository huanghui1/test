import * as THREE from "three";
import { useMount } from "ahooks";

export default () => {
  useMount(() => {
    let scene, camera, renderer;
    function init() {
      scene = new THREE.Scene();
      //这里参数不懂的同学回去看基本知识里的camera部分
      camera = new THREE.PerspectiveCamera(
        90,
        document.body.clientWidth / document.body.clientHeight,
        0.1,
        100
      );
      //camera的位置在x0,y0,z3，还记得迪尔卡右手坐标系吗？
      camera.position.set(0, 0, 3);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(document.body.clientWidth, document.body.clientHeight);
      document.getElementById("container").appendChild(renderer.domElement);

      var controls = new THREE.OrbitControls(camera, renderer.domElement);

      //等待添加模型

      loop();
    }

    function loop() {
      requestAnimationFrame(loop);
      renderer.render(scene, camera);
    }

    init();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  });

  return <div id="container"></div>;
};
