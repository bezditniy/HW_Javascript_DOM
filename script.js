
const createNewChild = () => {

    // получение элемента со страницы по значению атрибута id
    const list = document.getElementById("list");

    // создание елемента Div на странице
    const item = document.createElement("div");
    item.innerHTML = "NEW DIV ELEMENT";

    // функция, которая создает 10 елементов, а потом удаляет их
    if(list.children.length < 10) {
        list.appendChild(item);
    } else {
        while(list.lastChild) {
            list.removeChild(list.lastChild);
        }
    }
};