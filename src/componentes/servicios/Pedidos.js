//export async function pedirMetas() {
// const response = await fetch('/metas.json');
//   return metas;
//}

export async function pedirMetas(id) {
    const response = await fetch(`/api/metas${id}`);
    const metas = await response.json();
    return metas;
}

export async function crearMeta(meta) {
    const response = await fetch("/api/metas", {
        method: "POST",
        body: JSON.stringify(meta),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
    const metaCreada = await response.json();
    console.log("Meta creada!", metaCreada);
    return metaCreada;
}

export async function actualizarMeta(meta) {
    const response = await fetch(`/api/metas/${meta.id}`, {
        method: "PUT",
        body: JSON.stringify(meta),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
    const metaActualizada = await response.json();
    console.log("Meta actualizada!", metaActualizada);
    return metaActualizada;
}

export async function borrarMeta(id) {
    await fetch(`api/metas/${id}`, {
        method: "DELETE",
    });
    console.log("Meta borrada!", id);
}
