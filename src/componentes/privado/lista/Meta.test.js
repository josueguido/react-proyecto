import { render, screen } from "@testing-library/react";
import Meta from "./Meta";

jest.mock("react-router-dom", () => {
    const moduloOriginal = jest.requireActual("react-router-dom");
    return {
        ...moduloOriginal,
        Link: ({ children }) => <div>{children}</div>,
    };
});

describe("Componente Meta", () => {
    it("renderiza el boton", () => {
        render(<Meta />);
        const boton = screen.getByText("Completado");
        expect(boton).toBeInTheDocument();
    });
    it("renderiza el icono", () => {
        render(<Meta icono="🏃" />);
        const icono = screen.getByText("🏃");
        expect(icono).toBeInTheDocument();
    });
});
