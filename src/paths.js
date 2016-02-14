import path from 'path';


export const BUILD_DIR = 'build/';
export const DIST_DIR = 'dist/';
export const SRC_DIR = 'src/';
export const TMP_DIR = '.tmp/';

export const BUILD_ALL = path.join(BUILD_DIR, '**/*');

const _SRC_EXCLUDE = `!${path.join(SRC_DIR, 'jspm_packages/**/*')}`;
export const SRC_ALL = path.join(SRC_DIR, '**/*');
export const SRC_HTML = path.join(SRC_DIR, '**/*.html');
export const SRC_INDEX_HTML = path.join(SRC_DIR, 'index.html');
export const SRC_SCRIPT_ALL = path.join(SRC_DIR, '**/*.js');
export const SRC_SCRIPT = [
  _SRC_EXCLUDE,
  `!${path.join(SRC_DIR, 'config.js')}`,
  SRC_SCRIPT_ALL
];
export const SRC_STYLE_ALL = path.join(SRC_DIR, '**/*.scss');
export const SRC_STYLE = [_SRC_EXCLUDE, SRC_STYLE_ALL];

export const TMP_IMAGE = path.join(TMP_DIR, '**/*.+(png|jpg|svg)');

// Build time internal app paths
const INDEX_SCRIPT_BASE = 'index';
export const INDEX_SCRIPT = `${INDEX_SCRIPT_BASE}.js`;
export const BUILD_INDEX_JS = path.join(BUILD_DIR, INDEX_SCRIPT);
export const TMP_INDEX_JS = path.join(TMP_DIR, INDEX_SCRIPT_BASE);
export const SETTINGS = 'config/settings.js';
