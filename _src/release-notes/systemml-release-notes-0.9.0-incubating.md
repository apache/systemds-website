---
layout: page
title: SystemML 0.9.0-incubating Release Notes
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
      <h1>{{ site.data.project.name }} 0.9.0-incubating Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

Apache SystemML 0.9.0-incubating is the first release of SystemML since it joined Apache as an incubator project on November 2nd, 2015.

Extensive updates have been made to the project in several areas. These include APIs, data ingestion, optimizations, language and runtime operators, new algorithms, testing, and online documentation.

### APIs
- Improvements to MLContext and to MLPipeline wrappers

### Data Ingestion
- Data conversion utilities (from RDDs and DataFrames)
- Data transformations on raw data sets

### Optimizations
- Extensions to compilation chain, including IPA
- Improvements to parfor
- Improved execution of concurrent Spark jobs
- New rewrites, including eager RDD caching and repartitioning
- Improvements to buffer pool caching
- Partitioning-preserving operations
- On-demand creation of SparkContext
- Efficient use of RDD checkpointing

### Language and Runtime Operators
- New matrix multiplication operators (e.g., ZipMM)
- New multi-threaded readers and operators
- Extended aggregation-outer operations for different relational operators
- Sample capability

### New Algorithms
- Alternating Least Squares (Conjugate Gradient)
- Cubic Splines (Conjugate Gradient and Direct Solve)

### Testing
- PyDML algorithm tests
- Test suite refactoring
- Improvements to performance tests

### Online Documentation
- GitHub README
- Quick Start Guide
- DML and PyDML Programming Guide
- MLContext Programming Guide
- Algorithms Reference
- DML Language Reference
- Debugger Guide
