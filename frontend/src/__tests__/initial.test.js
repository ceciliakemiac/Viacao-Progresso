import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

import axiosApi from "../service/axios";
import InitialPage from "../pages/InicialPage/InicialPage";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('axios');

describe('fetch Corpos Celestes', () => {
  it('fetches successfully corpos celestes from api', async () => {
    const fakeCorpos = {
      data: [
        {
          "id": 1,
          "nome": "Mercúrio",
          "image_url": "http://localhost:8082/imagens/mercurio1.jpg"
        },
        {
          "id": 2,
          "nome": "Vênus",
          "image_url": "http://localhost:8082/imagens/venus1.jpg"
        },
        {
          "id": 7,
          "nome": "Marte",
          "image_url": "http://localhost:8082/imagens/marte1.jpg"
        },
        {
          "id": 9,
          "nome": "Júpiter",
          "image_url": "http://localhost:8082/imagens/jupiter1.jpg"
        },
        {
          "id": 15,
          "nome": "Saturno",
          "image_url": "http://localhost:8082/imagens/saturno1.jpg"
        },
        {
          "id": 18,
          "nome": "Urano",
          "image_url": "http://localhost:8082/imagens/urano1.jpg"
        }
      ]
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(fakeCorpos));
    await expect(axiosApi.getCorpos(`/destinos?tipo=1&orderBy=nome`)).resolves.toEqual(fakeCorpos);
  });
});

it("checks initial state", () => {
  act(() => {
    render(<InitialPage />, container);
  });

  const select = document.querySelector("[data-testid=select]");
  expect(select.innerHTML).toBe("Planeta");
})
















