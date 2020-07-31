igv.js Wrapper
==============
[![Target Discovery Platform][tdp-image]][tdp-url]

This is an UMD compatible wrapper around [igv.js](https://github.com/igvteam/igv.js) with additional TypeScript typings. 


Installation
------------

```
npm install github:datavisyn/igv_wrapper
```

Usage 
------------
```TypeScript
import 'font-awesome/scss/font-awesome.scss';
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.css';
import 'igv_wrapper/lib/igv-1.0.9.css';

import * as igv from 'igv_wrapper';

const options: igv.IIGVBrowserOptions = {
  palette: ['#00A0B0', '#6A4A3C', '#CC333F', '#EB6841'],
  locus: '7:55,085,725-55,276,031',

  reference: {
    id: 'hg19',
    fastaURL: '//igv.broadinstitute.org/genomes/seq/1kg_v37/human_g1k_v37_decoy.fasta',
    cytobandURL: '//igv.broadinstitute.org/genomes/seq/b37/b37_cytoband.txt'
  },

  trackDefaults: {
    bam: {
      coverageThreshold: 0.2,
      coverageQualityWeight: true
    }
  },

  tracks: [
    {
      name: 'Genes',
      url: '//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed',
      indexURL: '//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.idx',
      displayMode: 'EXPANDED'
    }
  ]
}

const browser: igv.IGVBrowser = igv.createBrowser(document.querySelector('div'), options);

```

***

<a href="https://www.datavisyn.io"><img src="https://www.datavisyn.io/img/logos/datavisyn-logo.png" align="left" width="200px" hspace="10" vspace="6"></a>
This repository is part of the **Target Discovery Platform** (TDP). For tutorials, API docs, and more information about the build and deployment process, see the [documentation page](https://wiki.datavisyn.io).


[tdp-image]: https://img.shields.io/badge/Target%20Discovery%20Platform-Library-violet.svg 
[tdp-url]: http://datavisyn.io
