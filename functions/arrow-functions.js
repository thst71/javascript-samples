
const f = x => { return { value: x }; };  // 👍 
const g = x => ({ value: x });            // 👍 
const i = x => { value: x };              // unklar: undefined
const j = x => { v: x, w: x };            // Error