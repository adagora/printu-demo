# Printu demo
application that renders data downloaded from the server. The server returns data describing an abstract `canvas' on which randomly placed multi-colored rectangles are placed, and bounding  box around them.

### Requirements
1. Fetch project information from the `/init` endpoint if the user does not provide a project ID.
2. Retrieve the project description from the `/project/{id}` endpoint using the project's ID.
3. Render a visual representation of the fetched project. You can draw either SVG or HTML - your choice. Each project element is described by its position, dimensions, and rotation. (Note: the object's position is always defined relative to its center, and dimensions `width`/`height` are given in the local, unrotated coordinate system).
4. The application should handle different types of elements. The element type is determined by the `type` field and can have values 'rectangle' or 'ellipse.' However, the solution should be prepared to add new types.
5. Calculate and draw a minimal bounding box for each element on the scene (without using the DOM API).
6. For each drawn element, mark the center point and provide information about the element's rotation.
7. Automatically scale the project to always be fully visible, even when the browser window size changes.
8. Allow the user to render any project by specifying its ID (in this scenario, the application should skip step 1).
9. Implementation should include proper typing and error handling.
10. The application should correctly handle API errors.
11. Propose (without the need for implementation) suggestions for feedback to the API author and what tests should be written for this application.

## Features
- bounding box

### Installation

```bash
git clone ..
npm install
npm start
```

### Technologies
- Typescript
- React
- redux-saga

### Known Issue Projects
```bash
ID cklzhx7e80001py9kcql231z3-4748779261984095 causes a server 500 error.
ID cklziyda30000m19k92zfao28-9430719080200028 causes a server 404 error.
ID cklzjw3mn0001cq9k3mvy3fvf-7941218198815694 returns incorrect data.
```

### Best Solution
[example](https://recruitment01.vercel.app/example)
