---
layout: page
title: SystemML 1.0.0 Release Notes
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

<section class="full-stripe full-stripe--subpage-header clear-header">
  <div class="ml-container ml-container--horizontally-center">
    <div class="col col-12 content-group content-group--center-content content-group--center-align">
      <h1>{{ site.data.project.name }} 1.0.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

The Apache SystemML 1.0.0 release was approved on December 12, 2017. The release includes enhancements, features, and additions as listed below.

### API Enhancements
- JMLC/MLContext parameter passing w/ and w/o meta data.

### Deep Learning
- Improved CPU convolution function performance, including sparsity.
- `Caffe2DML`.
- Enhanced/additional NN layers, e.g. conv2d transpose and depthwise convolution
- NN architecture summary table.
- [Experimental] `Keras2DML`.

### New Scripts / Algorithms
- Autoencoder.
- Enhanced PCA.

### Features & new Functions
- `sinh`, `cosh`, and `tanh`.
- `transformcolmap`.
- n-ary `rbind`/`cbind`.
- `order` with multiple order-by columns.

### Compiler
- Improved rewrites, e.g. merging of statement block sequences.
- IPA effectiveness.
- Automatic vectorization of indexing pairs.
- Instruction generation for memory efficiency.
- Instruction code organization.
- [Experimental] Code generation, code gen optimizer, and multi-threaded codegen operators.

### Robustness & Performance
- ParFor/HOP Memory budgets for Spark cluster configurations.
- JMLC prepared scripts (thread affinity for outputs and configs, script cloning, configuration management).
- Sparse-dense binary cell wise operations.

### [Experimental] GPU
- GPU conv2d and memory estimates.
- Additional kernels,e.g. right indexing.
- Single precision backend.

### Additional Packages
- SystemML Lite artifact, a minimumm-size uber JAR for embeddability (w/o Hadoop or Spark dependencies).

### Environment
- Compression on by default.
- Exploitation of native BLAS libraries.
- JDK 8 (dropped JDK 7).
- jCUDA for Windows & Linux (x86_64, ppc64le) included.
- Fine-grained runtime statistics.
- Refactored configurations parameters to have sysml prefix
- Performance test suite.

### Other
- Refreshed/new examples and notebooks (DML examples), tutorial.

### [JIRA release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12319522&version=12338328)
- Features, Improvements, Bug fixes, etc.  
