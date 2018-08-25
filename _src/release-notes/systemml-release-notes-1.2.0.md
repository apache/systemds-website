---
layout: page
title: SystemML 1.2.0 Release Notes
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
      <h1>{{ site.data.project.name }} 1.2.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

The Apache SystemML 1.2.0 release was approved on Aug. 24th, 2018. The release includes enhancements, features, and additions as listed below.


### New Builtin Functions/Operations/Scripts/Features
- Factorization Machines
- Support for functions with default parameters
- `exists()` for checking of existing variables
- Triangular matrix functions: `lower.tri()` and `upper.tri()`
- New nary min/max operations
- `as.matrix()` over list of scalars
- Function calls with named function arguments
- Convolution operations (forward/backward)
- Maxpooling operations (forward)
- Support for bias_add and bias_mult
- Global constants
- Added support for rowProd/colProd
- DML eval function
- New data type list for lists and structs

### API
- JMLC API extension for passing multiple dml scripts

### Compiler & Runtime
- Code motion framework
- Global subexpression elimination
- Optional rewrite for hoisting loop-invariant operations
- Improved IPA constant propagation and replacement
- ParFor Data Partitioning Rewrite on Hops instead of Statements
- New rewrites for chains of comparisons
- Extended rewrite framework for codegen plans
- Improved parfor optimizer rewrite for in-place-update
- Rework function block recompilation
- Support rowMeans in codegen row templates

### Performance Improvements
- Improved multi-threading of unary aggregates
- Reuse of fair scheduler pools in local parfor workers
- Performance issues Spark ctable(X,Y) w/ large num distinct
- Performance instruction generation
- Performance sample operations
- Performance ultra-sparse block operations
- New native tsmm operator and its integration
- Multi-threaded unary operations (e.g., exp, log, sigmoid)

### Bug Fixes 
- Memory leak buffer pool due to missing variable cleanup
- Missing buffer pool serialization of compressed matrices
- Compilation failure on inferring size of reshapes w/ zero rows/columns
- Incorrect result for min/max over matrices with NaNs
- Missing support for external functions with variable number of outputs
- Reblock ultra-sparse matrix fails with index out of bounds
- Performance issue CSE on DAGs w/ many root nodes (e.g., resnet200)
- Non-fused bias_add builtin creates incorrect results over sparse inputs
- Inconsistent namespace naming depending on OS
- Codegen failing on three-way multi-aggregate
- Codegen optimizer failing for MLogreg special cases
- Failing matrix market to binary reblock with zero rows/columns

### Deprecated/Removed/Cleanup
- Opt level 4
- File-based removeEmpty()
- Cleanup exception handling apis/compiler/runtime

### Experimental 
- Parameter server: local backend and distributed
- Sparsity estimators

### [JIRA release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12342959&projectId=12319522)
