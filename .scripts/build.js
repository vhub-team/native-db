import { FunctionParser, EnumParser, StructParser, PrimitiveParser, TypedefParser } from "@vhub/md-parser";
import fs from 'fs/promises';

async function buildFunctions() {
  const parser = new FunctionParser();
  const url = new URL('../functions/', import.meta.url);
  const files = await fs.readdir(url);

  const functions = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(new URL(file, url), 'utf-8');

      return {
        ...parser.parse(data),
        hash: file.replace('.md', '')
      };
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

async function buildTypedefs() {
  const parser = new TypedefParser();
  const url = new URL('../typedefs/', import.meta.url);
  const files = await fs.readdir(url);

  const typedefs = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(new URL(file, url), 'utf-8');
      return parser.parse(data);
    })
  )

  await fs.writeFile(new URL('../dist/typedefs.json', import.meta.url), JSON.stringify(typedefs, null, 2));
}

async function buildPrimitives() {
  const parser = new PrimitiveParser();
  const url = new URL('../primitives/', import.meta.url);
  const files = await fs.readdir(url);

  const primitives = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(new URL(file, url), 'utf-8');
      return parser.parse(data);
    })
  )

  await fs.writeFile(new URL('../dist/primitives.json', import.meta.url), JSON.stringify(primitives, null, 2));
}

async function build() {
  try {
    await fs.mkdir(new URL('../dist', import.meta.url));
  } catch {}

  await Promise.all([
    buildFunctions(),
    buildEnums(),
    buildStructs(),
    buildTypedefs(),
    buildPrimitives(),
  ])
}

build();
