AFRAME.registerComponent("bullets",{
    init:function(){

        this.shootBullet();
    },
    shootBullet:function(){

        window.addEventListener("keydown",(e)=>{
            if(e.key==='z'){
                var bullet = document.createElement("a-entity");

                bullet.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1
                });

                bullet.setAttribute("material","color","black");

                var camera = document.querySelector("#camera").object3D;

                var direction = new THREE.Vector3();

                camera.getWorldDirection(direction)

                var cam = document.querySelector("#camera");

                var sceneEl = document.querySelector("#scene");

                var pos = cam.getAttribute("position");

                bullet.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                });

                bullet.setAttribute("velocity",direction.multiplyScalar(-10));

                scene.appendChild(bullet)
            }
        })
    }
})
