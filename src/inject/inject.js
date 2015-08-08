chrome.extension.sendMessage({}, function (response) {
  var wi, waffleiron = {
    vars: {
      button: '<div class="_iron--button">+</div>',
      panels: document.getElementsByClassName('column-ct ng-scope')
    },
    init: function () {
      console.log("Iron init called");
      wi = this.vars;
      this.bindUI();
      this.addButtons();
    },
    addButtons: function () {
      var panels = wi.panels;
      for (var i = 0; i < panels.length; i++) {
        if (panels[i].classList.contains('_iron--has-button')) {
          continue;
        } else {
          panels[i].classList.add('_iron--has-button');
          this.addButton(panels[i]);
        }
      }
    },
    addButton: function (panel) {
      console.log("Iron addbutton called");
      var button = document.createElement("div");
      button.classList.add("_iron--button");

      button.addEventListener("click",function () {
      	console.log('called');
      	if(panel.classList.contains('_iron--panel-OPEN')){
      		panel.classList.remove("_iron--panel-OPEN");
      		button.textContent = "+";
      	}
      	else{
      		panel.classList.add("_iron--panel-OPEN");
      		button.textContent = "-";
      	}
      });

      var textnode = document.createTextNode("+");
      button.appendChild(textnode);
      panel.appendChild(button);

    },
    bindUI: function () {
      console.log("Iron bindUI called");
    }
  };
  window.setInterval(function () {
    waffleiron.addButtons()
  }, 100);
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      waffleiron.init();

      // ----------------------------------------------------------

    }
  }, 10);
});
