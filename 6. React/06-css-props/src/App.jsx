import Card from "./Card/Card";

function App() {
  return (
    <div>
      <Card
        image="https://cdn-imgix.headout.com/media/images/e3e4b92772a00bf08922a79dd5a874d7-Giza.jpg"
        country="Egypt"
        yearBuilt={-2580}
        stillExists
      />
      <Card
        image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/05/05/23/19-Babylon-North-Wind-Pictu.jpg?width=1200&height=630&fit=crop"
        country="Iraq (ancient Babylon)"
        yearBuilt={-600}
      />
      <Card
        image="https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg"
        country="Greece"
        yearBuilt={-435}
      />
      <Card
        image="https://drivethruhistoryadventures.com/wp-content/uploads/2018/07/3_Temple-of-Artemis-A11.jpg"
        country="Turkey (ancient Ephesus)"
        yearBuilt={-550}
      />
      <Card
        image="https://cdn.britannica.com/60/168960-120-5E430A89/Artist-re-creation-Mausoleum-of-Halicarnassus.jpg"
        country="Turkey (Bodrum)"
        yearBuilt={-350}
      />
      <Card
        image="https://pop.h-cdn.co/assets/16/01/3200x2400/gallery-1452202029-colossus-of-rhodes-project.jpg"
        yearBuilt={-292}
      />
      <Card
        image="https://cdn.britannica.com/07/172307-050-4D3BA855/Pharos-Alexandria.jpg"
        country="Egypt"
        yearBuilt={-280}
      />
    </div>
  );
}

export default App;
