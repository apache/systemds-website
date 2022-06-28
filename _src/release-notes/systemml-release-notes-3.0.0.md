---
layout: page
title: SystemDS 3.0.0 Release Notes
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
      <h1>{{ site.data.project.name }} 3.0.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.0.0

SystemDS 3.0.0 is a minor release. This release contains major improvements to existing features,
a large number of performance and robustness fixes, and some experimental features to better
support the end-to-end data science lifecycle. Importantly, this release supports Spark 3.x, Hadoop 3.x series only.

The major changes (compared to SystemDS 2.2) include:

- Upgrade to jdk 11, spark 3, and Hadoop 3
- update In-place for unary operations
- Python federated api tutorials, python end-to-end tutorials
- New builtins (for detecting and correcting value swap), random under-sampling, set operations on vectors,Extend min-max normalization built-in functions

### federated

- Improve federated tests
- Multi-tenant federated workers with variable isolation

- Frame map operations with margin parameter
- Improved frame removeEmpty operations for rows and cols

- Add docker image support
- Compressed Linear Algebra (CLA) support for federated
- CLA Spoof support
- CLA Decouple row Aggregate dictionary from column group
- CLA Offset memorizer

- Improve IPAPass Rewrite for Federated Plan to IPA package


### Python context

- Stabilize python context creation
- train and predict in different contexts


- Multi-threaded metadata collection for transformencode
- Multi-threaded allocation for transformencode
- multi-threaded covariance/central-moment operations

- CSR sparse support for transformapply
- BinaryCell colVector and row Vector extensions
- Patched frame of reference (PFOR) column group and PreAgg Cache block. Morphing between column groups, dense SDC or PFOR groupds now transform into

- Add support for python functions with list arguments

- Cache friendly apply phase for dense target matrix
