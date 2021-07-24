export default function LocalStorage() {
  if (!localStorage.getItem("watched")) {
    localStorage.setItem("watched", JSON.stringify([]));
  }
  if (!localStorage.getItem("watch-later")) {
    localStorage.setItem("watch-later", JSON.stringify([]));
  }
  if (!localStorage.getItem("favorite")) {
    localStorage.setItem("favorite", JSON.stringify([]));
  }
}
