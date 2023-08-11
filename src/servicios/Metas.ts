import { MetaTipo } from "../tipos/MetaTipo";

export async function pedirMetas(): Promise<MetaTipo[]> {
    const response = await fetch("/api/metas");
    const metas: MetaTipo[] = await response.json();
    return metas;
}

export async function pedirMeta(id: number): Promise<MetaTipo> {
    const response = await fetch(`/api/metas${id}`);
    const meta: MetaTipo = await response.json();
    return meta;
}

export async function crearMeta(meta: MetaTipo): Promise<MetaTipo> {
    const response = await fetch("/api/metas", {
        method: "POST",
        body: JSON.stringify(meta),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
    const metaCreada: MetaTipo = await response.json();
    console.log("Meta creada!", metaCreada);
    return metaCreada;
}

export async function actualizarMeta(meta: MetaTipo): Promise<MetaTipo> {
    const response = await fetch(`/api/metas/${meta.id}`, {
        method: "PUT",
        body: JSON.stringify(meta),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
    const metaActualizada: MetaTipo = await response.json();
    console.log("Meta actualizada!", metaActualizada);
    return metaActualizada;
}

export async function borrarMeta(id: number): Promise<void> {
    await fetch(`api/metas/${id}`, {
        method: "DELETE",
    });
    console.log("Meta borrada!", id);
}
