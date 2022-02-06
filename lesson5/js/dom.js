const list = document.querySelector('ul');
    const input = document.getElementById("favchap");
    const button = document.querySelector('button');

    button.onclick = function() {
      let myItem = input.value;
      input.value = '';

      const listItem = document.createElement('li');
      const listText = document.createElement('span');
      const listBtn = document.createElement('button');

      listItem.appendChild(listText);
      listText.innerHTML = myItem;
      listItem.appendChild(listBtn);
      listBtn.innerHTML = '❌';
      list.appendChild(listItem);

      listBtn.onclick = function(e) {
        list.removeChild(listItem);
      }

      input.focus();
    }