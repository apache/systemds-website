---
layout: page
title: SystemML 1.1.0 Release Notes
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
      <h1>{{ site.data.project.name }} 1.1.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

The Apache SystemML 1.1.0 release was approved on March 28, 2018. The release includes enhancements, features, and additions as listed below.

### New Builtin Functions/Operations
- `ifelse`
- `assert` 
- Deep learning builtin functions: `avg_pool`, `avg_pool_backward`
- Second-order `eval` 
- Accumulator operator += 
- Bitwise operators not, and, or, xor, & LShift, Rshift
- Logical operator support over matrices AND/OR/NOT/XOR

### Additional Layers in the NN library
- Average pooling
- Upsampling
- Low-rank fully connected

### New Capabilities/Features
- Dense matrix blocks >16GB, and operations
- Enable additional ParFor result aggregation operations
- UDFs callable in expressions
- Zero rows/columns matrices and updated operations such as removeEmpty
- Matrix-matrix multiplication over compressed matrices
- Extended Caffe2DML and Keras2DML APIs

### Compiler & Runtime
- Use common thread pool
- Single-precision support for native conv2d and mm operations
- Improved nnz maintenance, runtime propogation and memory management
- Robustness for matrices with larger than int dimensions
- [Experimental] Codegen extensions: operation support, extended optimizer, see SYSTEMML-2065

### Performance Improvements
- sparse left indexing, sparse reshape, ultra-sparse transpose, ultra-sparse rand, binary in-place operations, sparse relu backward, maxpooling, sparse im2col, ultra-sparse conv2d, read of short-wide sparse matrices, avoid unnecessary evictions, lock-free statistics maintenance, spark cpmm, spark aggregates, spark reshape, spark binary ops, etc.

### Bug Fixes 
- in APIs, performance, optimizer, runtime, GPU backend, Spark backend

### Deprecate
- Support for Spark 2.1 / 2.2 (make switch to newer ANTLR version)

### [JIRA release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12319522&version=12342282)
