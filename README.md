# squine

A function with a smooth transition between a sine wave approximation and a square wave approximation.

<center>
	<img height = "200px" src = "https://raw.githubusercontent.com/seanmorris/squine/refs/heads/master/examples/squine-graph.svg">
	Graph the function on <a href = "https://www.desmos.com/calculator/tjdm5bp0tv">Desmos</a>.
</center>


## Installation

```bash
npm install squine
```

## Usage

```js
import { squine } from 'squine';

// x: Input phase (e.g., between 0 and 1).
// r: Roundness factor (0 = square wave, 1 = sine wave). Default is 0.
const value = squine(0.25, 0.5);
console.log(value);
```

## API

### `squine(x, r = 0)`

- `x` {number}: Input value representing the wave phase.
- `r` {number} [optional]: Roundness factor. 0 = square approximation, 1 = sine approximation, 0.5 = something in between.

Returns `{number}` in the range `[0, 1]`.

## Purpose

I originally wrote this for a game. I used it to give moving platforms a "sweep and loiter" effect in my 2d platformer engine. I've since found other uses for it in things like day/night cycles and generic motion tweening, so I split it into its own lib.

# 🍻 Licensed under the Apache License, Version 2.0

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

© 2025 Sean Morris