function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module)
    return;
  if(!unityInstance.logo){
    unityInstance.logo = document.getElementById("custom-logo");
    unityInstance.logo.style.display = "block";
    unityInstance.container.appendChild(unityInstance.logo);
  }
  
  if(!unityInstance.progress){
    unityInstance.progress = document.getElementById("New");
    unityInstance.progress.style.display = "block";
    unityInstance.container.appendChild(unityInstance.progress);

  }

  makeProgress(progress);
  if(progress == 1){
    unityInstance.logo.style.display = "none";
    unityInstance.progress.style.display = "none";
  }
}