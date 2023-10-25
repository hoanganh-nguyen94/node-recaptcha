/**
 * @license
 * Copyright 2023 Google Inc. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This code is internal to the demo.
// It fetches responses from the demo endpoints.
function fetchServerResponse({ body, url }) {
  const serializedBody = JSON.stringify({
    ...body,
  });
  return fetch(url, {
    body: serializedBody,
    headers: new Headers({ "content-type": "application/json" }),
    method: "POST",
  })
    .then((response) => {
      const { ok, body: { data = {} } = {} } = response;
      if (ok) {
        return response.json();
      }
      throw new Error("Response was successful, but status was not 'ok'");
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

// This code is internal to the demo.
// It passes the score to the demo to display it.
function useAssessmentInClient(score) {
  if (score?.data?.score && score?.data?.label) {
    const demoElement = document.querySelector("recaptcha-demo");
    demoElement.setAttribute("score", score?.data?.score);
    demoElement.setAttribute("label", score?.data?.label);
    demoElement.setAttribute("reason", score?.data?.reason);
  }
}
