---
layout: page
title: SystemDS 3.4.0 Release Notes
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
      <h1>{{ site.data.project.name }} 3.4.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.4.0

SystemDS 3.4.0 is a minor release with Java 17 support, native Delta Lake I/O, Vector API execution paths, and runtime improvements.

### Runtime Requirements

- Java 17 is required.
- JVMs that launch SystemDS must enable the Vector API with `--add-modules=jdk.incubator.vector`.
- Custom Java launchers and `spark-submit` deployments must pass the required Java 17 module and package-open options to every JVM.

### New Features

- Native Delta Lake readers and writers for matrices and frames, built on Delta Kernel with Parquet data-file support.
- Vectorized execution and optimized Einstein summation (`einsum`).
- Expanded Scuro multimodal and time-series processing.
- New built-ins and algorithms, including:
  - LARS, missing-data mechanism detection, Hidden Markov Models, and HDBSCAN.
  - Clustered classification, BERT layers, GloVe, and counter-based random generation.

### Runtime and Performance Improvements

- Improved compressed execution, matrix multiplication, transforms, and workload-aware intermediate compression.
- Faster frame conversion and Python/JVM data transfer.
- Improved Spark context management, compiler rewrites, and GPU compatibility.

### Federated Runtime

- Improved worker lifecycle handling, planning, and workload analysis.
- Fixed threading and synchronization issues.

### Experimental Out-of-Core Execution

- Introduces an experimental out-of-core framework for workloads that exceed the JVM heap.
- Supports selected matrix operations, I/O, streams, caches, and iterative algorithms.
- Remains incomplete and is not recommended for production use.

### Bug Fixes and Other Improvements

- Fixed issues in `mdedup`, `ampute`, Isolation Forest, `unique`, trace compatibility, compiler rewrites, and federated execution.
- Updated Java 17 build, Docker, CI, and release infrastructure; added Databricks deployment material and documentation.
- Updated key dependencies: Spark 3.5.7, Hadoop 3.3.6 client libraries, Scala 2.12.18, Delta Kernel 3.3.2, Parquet 1.13.1, and JCuda 12.6.0.
