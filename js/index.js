var view = {};
var schemas_cols = (index) => {
  var cols = {
    index: index,
    name: "",
    type: "",
    size: "",
    date: "",
  }
  return cols;

}

var panel = {
  maxLine: 2,
  list: [],
  index: 0,
  location: "",
  locationInfo: "",
  tabs: [],
  path: "",
  item: {},
}
view.panel = panel;

var head = {};
var item = {
  name: "",
  type: "",
  size: "",
  date: "",
}
var row = document.querySelector('.row');
panel.item = document.querySelector('.panel');
panel.list.push(panel.item);
var clonePanel = panel.item.cloneNode(true);

panel.list.push(clonePanel);
row.appendChild(clonePanel);
//panel.item = document.querySelector('.panel');
//console.log('panel.list.length=', panel.list.length)
var panels = [];
for (var index = 0; index < panel.list.length; index++) {
  panel.item = panel.list[index];

  panel.cols = document.querySelector('.panel__cols');

  //console.log('panel.cols=', panel.cols);

  for (var key in item) {
    //Элемент panel в блоке row
    //console.log('.panel__key', '.panel__' + key);
    panel.cols[key] = panel.list[index].querySelector('.panel__' + key);

    head[key] = document.createElement('div');
    head[key].className = "head-item head-item__" + key;
    head[key].innerHTML = '<h3>' + key + '</h3>';
    panel.cols[key].appendChild(head[key]);
    for (var i = 0; i <= panel.maxLine; i++) {
      item[key] = document.createElement('div');
      item[key].className = "item__" + key;
      panel.cols[key].appendChild(item[key]);
    }
  }
}

//      console.log('panel.list[1]=', panel.list[1])