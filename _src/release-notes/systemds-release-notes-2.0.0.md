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
      <h1>{{ site.data.project.name }} 2.0.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 2.0.

SystemDS 2.0 is the first major release under the new name. This release contains a major refactoring, a few major
features, a large number of improvements and fixes, and some experimental features to better support the end-to-end
data science lifecycle. In addition to that, this release also removes several features that are not up date and
outdated.

The major changes (compared to SystemML 1.2) include

- New mechanism for DML-bodied (script-level) builtin functions, and a wealth of new built-in functions for data preprocessing including data cleaning, augmentation and feature engineering techniques, new ML algorithms, and model debugging.
- Several methods for data cleaning have been implemented including multiple imputations with multivariate imputation by chained equations (MICE) and other techniques, SMOTE, an oversampling technique for class imbalance, forward and backward NA filling, cleaning using schema and length information, support for outlier detection using standard deviation and inter-quartile range, and functional dependency discovery.
- A complete framework for lineage tracing and reuse including support for loop deduplication, full and partial reuse, compiler assisted reuse, several new rewrites to facilitate reuse.
- New federated runtime backend including support for federated matrices and frames, federated builtins (transform-encode, decode etc.).
- Refactor compression package and add functionalities including quantization for lossy compression, binary cell operations, left matrix multiplication. [experimental]
- New python bindings with supports for several builtins, matrix operations, federated tensors and lineage traces.
- Cuda implementation of cumulative aggregate operators (cumsum, cumprod etc.)
- New model debugging technique with slice finder.
- New tensor data model (basic tensors of different value types, data tensors with schema) [experimental]
- Cloud deployment scripts for AWS and scripts to set up and start federated operations.
- Performance improvements with parallel sort, gpu cum agg, append cbind etc.
- Various compiler and runtime improvements including new and improved rewrites, reduced Spark context creation, new eval framework, list operations, updated native kernel libraries to name a few.
- New data reader/writer for json frames and support for sql as a data source.
- Miscellaneous improvements: improved documentation, better testing, run/release scripts, improved packaging, Docker container for systemds, support for lambda expressions, bug fixes.
- Removed MapReduce compiler and runtime backend, pydml parser, Java-UDF framework, script-level debugger.
- Deprecated ./scripts/algorithms, as those algorithms gradually will be part of SystemDS builtins.