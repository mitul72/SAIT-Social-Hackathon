
export default function GetRequest() {
  fetch("/api/threads").then((data) => {
    console.log(data);
  });
}
