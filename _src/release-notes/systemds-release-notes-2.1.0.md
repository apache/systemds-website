---
layout: page
title: SystemDS 2.1.0 Release Notes
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
      <h1>{{ site.data.project.name }} 2.1.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 2.1.0

SystemDS 2.1 is a minor release. This release contains major improvements
to existing features, a large number of fixes, and some experimental
features to better support the end-to-end data science lifecycle.
In addition to that, this is the last release with Java 8 and Spark 2.x.

The major changes (compared to SystemDS 2.0) include

- Federated Backend: Extended operations and built-ins to support various
workflows and algorithms. Extended parameter server for federated training
of Neural Networks.
- A wealth of new and improved built-in functions including support for
string operations, time-series analysis, data cleaning, grid search
hyperparameter tuning, multi-threaded feature transformations.
- Better support for Eval and list data structure.
- Various performance improvements in SystemDS' local, distributed, and
native runtimes.
- Python API: Source functionality to allow arbitrary DML script,
auto-generated Python API for all built-in functions,  list support
allowing Pytonic access and manipulation of lazily evaluated DML elements,
multi return continuation, allowing continued execution past calls to
builtin functions.
- GPU Backend: Various performance improvements and fixes, cuda code
refactor, cuda code generation [experimental].
- Lineage Tracing and Reuse: Initial support for federated and GPU
backends, new hybrid lineage deduplication and reuse of compressed lineage
DAGs, lineage cache benefits estimator, improved cache eviction logic.
- Usability: Better Log4j integration, debug flag to reduce error logging,
support for remote debugging.
- Miscellaneous Improvements: Improved documentation, better testing,
streamlined release process.
