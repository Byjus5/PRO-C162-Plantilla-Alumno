AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        //obtén la dirección de la cámara como un vector Three.js 
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //establece la velocidad y su dirección
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

        scene.appendChild(bullet);
      }
    });
  },

  removeBullet: function (e) {
    //Entidad original (bala)
    console.log(e.detail.target.el);

    //Otra entidad, la que tocó la bala.
    console.log(e.detail.body.el);

    //elemento de bala


    //elemento que es golpeado
 

    if (elementHit.id.includes("box")) 
      {
        //establecer el atributo del material
        

        //impulso y punto de vector
        

        //eliminar evento de escucha
        
        
        //eliminar las balas de la escena
      
    }
  },
});


