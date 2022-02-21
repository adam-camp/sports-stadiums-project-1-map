require([
      "esri/views/MapView",
      "esri/WebMap",
      "esri/widgets/Legend",
      "esri/widgets/Search",
  "esri/widgets/Home",
      "dojo/domReady!"
    ], function(
      MapView, WebMap, Legend, Search, Home
    ) {

      var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "1f922787ec734eb2b934d7dba4b7e02c"
        }
      });

      var view = new MapView({
        map: webmap,
        container: "viewDiv"
      });
      
      view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = webmap.layers.getItemAt(1);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Baseball Stadiums"
          }]
         }); 
       
        //*Legend turned off; no data.  Turn back on by uncommenting following line*//
   //*view.ui.add(legend, "bottom-right");*//
         }); 

var searchWidget = new Search({
        view: view
      });
      
     var homeWidget = new Home({
       view: view
     }
     )
           view.ui.add(searchWidget, {
        position: "top-right"
      });
      
      view.ui.add(homeWidget, {
        position: "top-left"
      });
  
    });

//* 1f922787ec734eb2b934d7dba4b7e02c *//
