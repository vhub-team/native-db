import { FunctionParser, EnumParser, StructParser } from "@vhub/md-parser";
import fs from 'fs/promises';

async function buildFunctions() {
  const parser = new FunctionParser();
  const url = new URL('../functions/', import.meta.url);
  const files = await fs.readdir(url);

  const functions = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(new URL(file, url), 'utf-8');
      return parser.parse(data);
    })
  )

  await fs.writeFile(new URL('../dist/functions.json', import.meta.url), JSON.stringify(functions, null, 2));
}

async function buildEnums() {
  const parser = new EnumParser();
  const url = new URL('../enums/', import.meta.url);
  const files = await fs.readdir(url);

  const enums = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(new URL(file, url), 'utf-8');
      return parser.parse(data);
    })
  )

  await fs.writeFile(new URL('../dist/enums.json', import.meta.url), JSON.stringify(enums, null, 2));
}

async function buildStructs() {
  const parser = new StructParser();
  const url = new URL('../structs/', import.meta.url);
  const files = await fs.readdir(url);

  const structs = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(new URL(file, url), 'utf-8');
      return parser.parse(data);
    })
  )

  await fs.writeFile(new URL('../dist/structs.json', import.meta.url), JSON.stringify(structs, null, 2));
}

async function build() {
  try {
    await fs.mkdir(new URL('../dist', import.meta.url));
  } catch {}

  await Promise.all([
    buildFunctions(),
    buildEnums(),
    buildStructs(),    
  ])
}

build();
