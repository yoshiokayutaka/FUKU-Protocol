// Validate all JSON entries against schema
import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

const ROOT = process.cwd();
const ajv = new Ajv({allErrors: true, allowUnionTypes: true});

const schema = JSON.parse(fs.readFileSync(path.join(ROOT, 'schema', 'philo.schema.json'), 'utf-8'));
const validate = ajv.compile(schema);

const entriesDir = path.join(ROOT, 'entries');

let errors = 0;
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (name.endsWith('.json')) {
      const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
      const ok = validate(data);
      if (!ok) {
        console.error('Invalid:', p);
        console.error(validate.errors);
        errors++;
      } else {
        console.log('OK:', p);
      }
    }
  }
}

walk(entriesDir);
if (errors) {
  console.error(`Validation failed: ${errors} file(s)`);
  process.exit(1);
} else {
  console.log('All good.');
}
