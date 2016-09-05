---
layout: page
title: SystemML 0.10.0-incubating Release Notes
description: Project Release Notes
group: nav-right
---
<!--
{% comment %}
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to you under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}
-->
<br/><br/><br/>

The **Apache SystemML 0.10.0-incubating release** was approved on June 3rd, 2016. It is the second release of Apache SystemML since it
became an incubator project on November 2nd, 2015. Extensive updates have been made to the project in several areas, as detailed
below.

### Different Types of Spark Matrix Blocks
- Supported internal formats: MCSR (default), CSR, COO
- Automatic MCSR&#10145;CSR on Spark read/caching (for memory efficiency)
- Automatic MCSR&#10145;CSR on sparse update-in-place (avoid serialization)

### Frame Support for JMLC API/CP
- New frame data type, deeply integrated into compiler and runtime
- New builtin functions: transformapply, transformencode, transformdecode, transformmeta
- Supported operations: read/write, left/right indexing, casting, append, transform/transformapply

### Framework Compatibility/Configuration
- [SYSTEMML-418] Version-specific Spark memory budgets (>=1.6, legacy)
- [SYSTEMML-158] Updated deprecated Hadoop properties
- [SYSTEMML-476] Version-specific MR configuration handling (MRv2, MRv1)
- Fixes for backwards compatibility to MRv1 (Guava dependency conflicts, runtime changes such as task handling for multiple output committer)
- New pass-through mapred/mapreduce configurations through SystemML-config
- [SYSTEMML-584/585] New thread-local configuration handling (compiler/DML config)

### Deep Learning Support
- [SYSTMEML-618] New DML-script NN library
- [SYSTEMML-540] New built-in singlenode operations: conv2d, maxpooling, im2col, col2im, rotate
- New lenet-train DML script

### API/Script Usability
- [SYSTEMML-607/604/611] Parser error handling
- [SYSTEMML-506/508/544/577/649/651] Extended MLContext/JMLC APIs
- [SYSTEMML-625/626/632] Improved source statement handling (e.g., imports, absolute paths)
- [SYSTEMML-617/631/654] Improved namespace handling
- [SYSTEMML-240] Extended stats outputs for Spark collect/broadcast/parallelize
- [SYSTEMML-495] SystemML configuration handling
- [SYSTEMML-209] Include algorithms in SystemML jar
- [SYSTEMML-647/648] Deprecated castAsScalar, ppred
- [SYSTEMML-477] JSON meta data handling
- [SYSTEMML-294] Print matrix built-in function
- [SYSTEMML-296/676/670] Improved PyDML syntax: slicing, rand, cdf, elif
- [SYSTEMML-675] Support for negative for/parfor loop increments

### New Fused Physical Operators
- [SYSTEMML-488] Fused wdivmm w/ 4 operands
- [SYSTEMML-510] Fused wdivmm/wcemm w/ eps term

### Various Performance Features
- [SYSTEMML-427/512] Extended IPA (propagate scalar variables)
- [SYSTEMML-282] Extended update-in-place support for parfor intermediates
- [SYSTEMML-552/399] Performance parallel binary/text readers (sort sparse/nnz handling)
- [SYSTEMML-552/641] Cache-conscious operations: sparse-dense wdivmm/wsloss, sparse-dense/sparse-sparse mm, dense-dense skinny rhs mm
- [SYSTEMML-641] Tuned special cases for block matrix multiplication: e.g., mm w/ skinny rhs, colwise parallelization wide rhs
- [SYSTEMML-396/400] New/extended multithreaded operations: cumsum/cummin/cummax/cumprod, transpose, and rand
- [SYSTEMML-510/694] New simplification rewrites: "pushdown unaryagg-transpose", "simplify transpose-aggbin-binary chains", "reorder minus-mmult", "canonicalize matmult-add-scalar", improved constant folding (all unary)
- [SYSTEMML-653] Asynchronous bufferpool cleanup of evicted files/nio file eviction
- MR iqm/quantile/median (qsort num reducers, qpick buffer size)

### DML Script Updates
- [SYSTEMML-536] New KNN algorithm (still staging)
- [SYSTEMML-534] Optional console output univariate statistics
- [SYSTMEML-494] GLM compiler warnings
- Robustness input/output handling L2SVM, MSVM, and Naive Bayes
- Random data generator for ALS

### Various Fixes
- Dozens of fixes for diverse issues, fix pack for 0.9 release

### Build, Documentation, Examples
- [SYSTEMML-551] Enhanced JMLC javadoc
- [SYSTEMML-484] Build javadoc jar
- [SYSTEMML-468] Contributing to SystemML doc
- [SYSTEMML-517/524] DML Language Reference updates
- [SYSTEMML-498] Troubleshooting guide
- SystemML Jupyter/Zeppelin Notebook examples

