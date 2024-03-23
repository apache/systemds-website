---
layout: page
title: SystemDS 3.2.0 Release Notes
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
      <h1>{{ site.data.project.name }} 3.2.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.2.0

SystemDS 3.2 is a minor release. Release 3.2 contains new features and major improvements to existing features.

### New Features

- Reuse, recycling, and memory management of GPU
- New operator placement strategy to maximize parallelism across backends (CPU, Spark, GPU)
- Improved compiler integration of multi-backend reuse: delayed caching, eviction placement, checkpoint placement, and asynchronous operators
- Frame compression and lossy compression with binning
- Improved compression support for transform encode
- Ultra sparse matrix multiplication optimization
- Improved parallel writing to the local file system
- Extended sparsity propagation in federated backend
- Deduplicated matrix block for word embedding
- Double compressed sparse row block
- Time-series Alignment library (Python API)


### New Builtins

- Linearized image transformations
- Anomaly detection via IsolationForest
- Better support for DNN models
- Performance improvement of many existing builtins


### Other Optimizations

- Various new compiler rewrites
- Extended constant folding
- Improved handling of ultra-sparse matrices
- Rewrites for GPU operators
- Robustness for decision tree and random forest
- Improved performance of transform encode/apply
- Various bug fixes in memory estimates, Spark checkpointing, frame operations, IO, and other areas


### Software Build

- Upgrade spark 3.5 and corresponding dependencies and fix imports
- Slf4j and log4j update to the latest version
- GitHub actions improvements for Windows, upgrade the actions dependencies to the latest. Fix all the flagged dependencies
- Fix GitHub actions failure related to federated tests
- Code coverage and actions artifact lifecycle


### Documentation

- Fix federated tutorial commands.
- Builtin functions, Random Forest and decision tree algorithms
