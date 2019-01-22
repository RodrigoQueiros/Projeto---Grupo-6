<template>

<canvas id="myCanvas">noice</canvas>
  
</template>

<style>
#myCanvas {
  width: 800px;
  height: 600px;
  border: 1px solid #000;
}
</style>


<script>
export default {
  data: function() {
    return {
      recBook: "Harry Potter"
    };
  },

  created() {
    console.log(this.recBook);
    let getBook = this.recBook;

    window.onload = function() {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 800;
      canvas.height = 600;

      //create a new Image object
      let img = new Image();
      //define the source local image

      img.addEventListener("load", function() {
        ctx.drawImage(img, 0, 0, canvas.width, 1200);
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, 800, 600);
      });

      img.src =
        "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg";

      ctx.globalAlpha = 1;

      //create a new Image object
      let img2 = new Image();
      //define the source local image

      img2.addEventListener("load", function() {
        ctx.drawImage(img2, 100, 100, 250, 350);
        ctx.fillStyle = "white";
        ctx.font = "60px Arial";
        ctx.fillText("Recomendado: " + getBook, 10, 570);

        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Pontuaçao média: 4.3", 400, 130);
      });
      img2.src =
        "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg";
    };
  },
  methods: {},
  computed: {}
};
</script>
