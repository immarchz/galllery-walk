export async function uploadImage(name: string, image: File) {
  const body = new FormData();
  body.append(name, image);
  return fetch("/api/image", {
    method: "POST",
    body: body,
  });
}
