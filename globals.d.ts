declare module '@pages/*';
declare module '@components/*';
declare module '@utils/*';
declare module '@routes/*';

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
