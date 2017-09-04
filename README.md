igv.js Wrapper
==============

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
import './lib/igv-1.0.9.css';

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
