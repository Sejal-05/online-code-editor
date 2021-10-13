document.querySelector(".btn").addEventListener("click", run);

function run(){
  let html = document.querySelector(".editor #html").value;
  let css = "<style>" + document.querySelector(".editor #css").value + "</style>";
  let js = document.querySelector(".editor #js").value;
  let result_ = document.querySelector(".editor #result");

  result_.contentDocument.body.innerHTML = html+css;
  result_.contentWindow.eval(js);

}

document.querySelector(".editor #html").addEventListener("keyup", run);
document.querySelector(".editor #css").addEventListener("keyup", run);
document.querySelector(".editor #js").addEventListener("keyup", run);
