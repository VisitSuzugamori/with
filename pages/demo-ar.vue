<template>
<div id="demoAR">
  <div class="arjs-loader">
   <div>Loading, please wait...</div>
  </div>

  <a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <a-assets>
      <img id="book" src="/dengekimaoh2021-7.jpg">
    </a-assets>
    <a-plane src="#book" height="1240" width="1764" rotation="-90 0 0"></a-plane>
    <a-nft
      type="nft"
      url="/dengekimaoh2021-7"
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
      <a-entity
            gltf-model="/Ryukin_goldfish/scene.gltf"
            scale="5 5 5"
            position="50 150 0"
        >
      </a-entity>
    </a-nft>
    <a-entity camera></a-entity>
  </a-scene>
  <v-card>
    <v-card-text>
      <p><a href="https://sketchfab.com/3d-models/ryukin-goldfish-df9a7c57c2b34d5a818f360e679b576a">&quot;Ryukin goldfish&quot; by somitsu</a> is licensed under Creative Commons Attribution <a href="http://creativecommons.org/licenses/by/4.0/" >CC-BY</a>.</p>
    </v-card-text>
  </v-card>
</div>
</template>

<style>
  .arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
  }
</style>
