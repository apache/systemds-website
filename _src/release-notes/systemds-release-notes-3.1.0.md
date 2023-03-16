---
layout: page
title: SystemDS 3.1.0 Release Notes
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
      <h1>{{ site.data.project.name }} 3.1.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.1.0

SystemDS 3.1 is a minor release. Release 3.1 contains new features and major improvements to existing features.

### Features and Improvements

- Performance codegen kmeans mnist80m w/ compression
- Prefetch instruction
- Broadcast instruction
- Create apply functions for cleaning primitives
- LogicalEnumerator change with transitions concept and cleanups
- Flatten the nested loop for parallel pipelines execution
- Adding apply_pipeline() builtin for cleaning pipelines API
- Release docker images with GitHub actions
- Add monitoring tool testing workflows
- Asynchronous Execution and Persist Spark Transformations
- Future-based asynchronous execution of Spark actions
- New operator linearization order to maximize inter-operator parallelism
- Lineage-based reuse of Spark actions
- Push down rmvar instructions for asynchronous instructions
- Lineage-based reuse of asynchronous operators
- Persist and reuse Spark RDDs
- Refactor to add LOP rewrite step in compilation
- Federated Compression Instruction
- CLA IO Compressed Matrices
- Compressed Max/Min Index support.
- Federated async compression
- Federated Workload-aware Compression
- Python 3.9 support
- Parallel Compressed Encode
- New builtin function auc (area under ROC curve)
- Unique() function for performance

### Bug

- Fix memory configuration in sparkDML.sh
- OOM Error On Binary Write
- Out of memory error
- CLA Improved Run estimation
- AttributeError: Function definition not found
- applySchema built-in to set the schema of frame from DML
- CSR TSMM left with filled rows bug
- Sparse TSMM dense row blocks CSR
- py4j.Py4JException: Method exceptionString([class org.apache.spark.SparkConf]) does not exist
- MatrixBlock size using CSR when allowed
- Federated Nan Values
- countDistinctApprox() operation in AggregateUnaryCPInstruction is inefficient for row/col aggregations
- Correct the release artifact generation date
- Log4j incompatible dependencies
- ConcurrentModificationException in federated execution
- Jackson Core missing for json writing and reading in reduced binary
- Fix Java doc warnings
- Enque output not UTF-8 python
- Read CSV directly without mtd python
- Python configuration not loading defaults
- Matrix Multiplication crash in Spark
- Pipelines failing in Hybrid execution
- Built-in tests failure in Git actions
- Cleaning Pipelines failed with No space left on device
- IndexOutOfBounds due to int overflow on replace
- Cleaning Pipelines: Replace function failure in hybrid execution
- Cleaning Pipelines: Block Sizes mismatch
- Cleaning Pipelines in hybrid mode: Invalid block dimensions error
- Federated Statistics print in non federated scenario
- Spark Aggregate Binary operations parse to Fed instruction
- FederationUtils.bindResponses causes out of memory because of sparse matrices.
- Python IDE test Docs fail
- MSVM robustness for non-existing classes
- CLA ArrayOutOfBounds in sample
- CLA Invalid Unique estimate DDC
- Federated read cache cannot be disabled
- Monitoring Heavy hitters not always correct list
- Slow Federated Mlogreg on Criteo (dummy-coded)
- Incorrect warning when reading scalars
- Spark with default settings
- Cleaning Pipelines: Task Parallel Experiments failing in spark mode
- Unique() crashes with iterator EOF on vectors with >1K distinct items
- Perftest: Mlogreg on 1M_1k_dense w/ unnecessary spark jobs
- Perftest: lmDS on 1M_1k_dense with unnecessary spark tsmm
- Java doc warnings
