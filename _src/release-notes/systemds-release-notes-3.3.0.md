---
layout: page
title: SystemDS 3.3.0 Release Notes
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
      <h1>{{ site.data.project.name }} 3.3.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.3.0

SystemDS 3.3 is a minor release. Release 3.3 contains new features and major improvements to existing features.

### New Features

#### Built-in Functions
- Added `sliceLineExtract` for efficient slicing operations.
- Introduced `adasyn` for synthetic data generation in imbalanced datasets.
- Added `GELU Activation Function` (approximation) for deep learning tasks.
- New built-in for `vectorized simple exponential smoothing`.
- **Python API Enhancements**:
  - Added built-ins for `solve`, `median`, `quantile`, `lu`, `qr`, `cov`, and more.
  - Introduced cumulative aggregate functions like `cumsum`, `cumprod`, etc.
  - Added support for matrix operations like `diag`, `trace`, `sqrt`, `exp`, `floor`, and `ceil`.

#### Performance Enhancements
- Optimized matrix multiplication, including multi-threaded dot-product operations.
- Improved performance for CSV and MatrixMarket readers with parallelism.
- Enhanced incremental slice-line pruning for better efficiency.
- Optimized federated operations with improved threading and cost estimation.

#### Federated Learning
- Fixed threading bugs in federated operations.
- Improved federated planner memoization and added support for weighted covariance.

#### Compression
- Introduced workload-aware compression for intermediates.
- Enhanced compressed matrix operations with new tests and optimizations.

#### Scuro Framework
- Added support for multi-head attention layers and LSTM representations.
- Introduced new modalities and data representations for Scuro.

### Bug Fixes
- Fixed robustness issues in built-in functions:
  - Corrected `trace` handling for non-square matrices.
  - Fixed `seq()` length computation for edge cases.
  - Resolved issues in `transformencode` for federated backends.
- Addressed edge cases in matrix operations:
  - Sparse-dense matrix multiplication.
  - Incremental slice-line pruning.
- Fixed federated operation bugs:
  - Improved robustness for federated weighted covariance.
  - Resolved flaky tests in federated primitives.

### Code Quality and Testing
- Improved test coverage:
  - Simplification rewrites, federated operations, and Python APIs.
  - Added new tests for matrix operations and compression.
- Refactored and cleaned up code for better maintainability and performance.

### Documentation
- Updated Python API documentation with examples for new built-ins.
- Improved overall documentation for better usability.

### Dependency Updates
- Updated library versions and dependencies:
  - Bumped `codecov-action` to the latest version.
  - Updated other dependencies for compatibility and security.

### Miscellaneous
- Added new rewrite rules for simplifications:
  - `pushdown-sum` and `rm-reorg` for better performance.
- Introduced new I/O support for cloud-optimized GeoTIFF files.
- Added new determinant function and kernels for matrix operations.
