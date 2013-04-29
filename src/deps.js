// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * WARNING: This file is generated by generate_deps_js_contents.py
 *
 *        Do not edit directly.
 */
base.addModuleDependency(
    'model.counter',
    'guid');
base.addModuleDependency(
    'model.counter',
    'range');
base.addModuleDependency(
    'model.object_instance',
    'range');
base.addModuleDependency(
    'model.object_instance',
    'sorted_array_utils');
base.addModuleDependency(
    'model.time_to_object_instance_map',
    'range');
base.addModuleDependency(
    'model.time_to_object_instance_map',
    'sorted_array_utils');
base.addModuleDependency(
    'model.object_collection',
    'range');
base.addModuleDependency(
    'model.object_collection',
    'sorted_array_utils');
base.addModuleDependency(
    'model.object_collection',
    'model.object_instance');
base.addModuleDependency(
    'model.object_collection',
    'model.time_to_object_instance_map');
base.addModuleDependency(
    'model.slice_group',
    'range');
base.addModuleDependency(
    'model.slice_group',
    'model.slice');
base.addModuleDependency(
    'model.slice_group',
    'color_scheme');
base.addModuleDependency(
    'model.slice_group',
    'filter');
base.addModuleDependency(
    'model.async_slice_group',
    'range');
base.addModuleDependency(
    'model.async_slice_group',
    'model.slice');
base.addModuleDependency(
    'model.thread',
    'range');
base.addModuleDependency(
    'model.thread',
    'guid');
base.addModuleDependency(
    'model.thread',
    'model.slice');
base.addModuleDependency(
    'model.thread',
    'model.slice_group');
base.addModuleDependency(
    'model.thread',
    'model.async_slice_group');
base.addModuleDependency(
    'model.thread',
    'model.sample');
base.addModuleDependency(
    'model.process_base',
    'range');
base.addModuleDependency(
    'model.process_base',
    'guid');
base.addModuleDependency(
    'model.process_base',
    'model.counter');
base.addModuleDependency(
    'model.process_base',
    'model.object_collection');
base.addModuleDependency(
    'model.process_base',
    'model.thread');
base.addModuleDependency(
    'model.process',
    'model.process_base');
base.addModuleDependency(
    'model.kernel',
    'model.process_base');
base.addModuleDependency(
    'model.cpu',
    'range');
base.addModuleDependency(
    'model.cpu',
    'model.slice');
base.addModuleDependency(
    'model.cpu',
    'model.counter');
base.addModuleDependency(
    'model',
    'range');
base.addModuleDependency(
    'model',
    'event_target');
base.addModuleDependency(
    'model',
    'model.process');
base.addModuleDependency(
    'model',
    'model.kernel');
base.addModuleDependency(
    'model',
    'model.cpu');
base.addModuleDependency(
    'model',
    'filter');
base.addModuleDependency(
    'importer.timeline_stream_importer',
    'model');
base.addModuleDependency(
    'importer.timeline_stream_importer',
    'model.slice');
base.addModuleDependency(
    'selection',
    'range');
base.addModuleDependency(
    'selection',
    'event_target');
base.addModuleDependency(
    'timeline_viewport',
    'event_target');
base.addModuleDependency(
    'tracks.track',
    'ui');
base.addModuleStylesheet(
    'tracks.track',
    'tracks.track');
base.addModuleDependency(
    'tracks.container_track',
    'tracks.track');
base.addModuleDependency(
    'tracks.container_track',
    'filter');
base.addModuleDependency(
    'tracks.container_track',
    'ui');
base.addModuleDependency(
    'tracks.canvas_based_track',
    'tracks.track');
base.addModuleDependency(
    'tracks.canvas_based_track',
    'fast_rect_renderer');
base.addModuleDependency(
    'tracks.canvas_based_track',
    'color_scheme');
base.addModuleDependency(
    'tracks.canvas_based_track',
    'ui');
base.addModuleStylesheet(
    'tracks.canvas_based_track',
    'tracks.canvas_based_track');
base.addModuleDependency(
    'tracks.slice_track',
    'tracks.canvas_based_track');
base.addModuleDependency(
    'tracks.slice_track',
    'sorted_array_utils');
base.addModuleDependency(
    'tracks.slice_track',
    'fast_rect_renderer');
base.addModuleDependency(
    'tracks.slice_track',
    'color_scheme');
base.addModuleDependency(
    'tracks.slice_track',
    'ui');
base.addModuleStylesheet(
    'tracks.slice_track',
    'tracks.slice_track');
base.addModuleDependency(
    'tracks.cpu_track',
    'tracks.container_track');
base.addModuleDependency(
    'tracks.cpu_track',
    'tracks.slice_track');
base.addModuleDependency(
    'tracks.cpu_track',
    'filter');
base.addModuleDependency(
    'tracks.cpu_track',
    'model');
base.addModuleDependency(
    'tracks.cpu_track',
    'ui');
base.addModuleDependency(
    'tracks.counter_track',
    'tracks.canvas_based_track');
base.addModuleDependency(
    'tracks.counter_track',
    'color_scheme');
base.addModuleDependency(
    'tracks.counter_track',
    'ui');
base.addModuleStylesheet(
    'tracks.counter_track',
    'tracks.counter_track');
base.addModuleDependency(
    'tracks.object_instance_track',
    'tracks.canvas_based_track');
base.addModuleDependency(
    'tracks.object_instance_track',
    'sorted_array_utils');
base.addModuleDependency(
    'tracks.object_instance_track',
    'color_scheme');
base.addModuleDependency(
    'tracks.object_instance_track',
    'ui');
base.addModuleStylesheet(
    'tracks.object_instance_track',
    'tracks.object_instance_track');
base.addModuleDependency(
    'tracks.slice_group_track',
    'tracks.container_track');
base.addModuleDependency(
    'tracks.slice_group_track',
    'sorted_array_utils');
base.addModuleDependency(
    'tracks.slice_group_track',
    'ui');
base.addModuleDependency(
    'tracks.async_slice_group_track',
    'tracks.slice_group_track');
base.addModuleDependency(
    'tracks.async_slice_group_track',
    'ui');
base.addModuleDependency(
    'tracks.thread_track',
    'tracks.container_track');
base.addModuleDependency(
    'tracks.thread_track',
    'tracks.slice_track');
base.addModuleDependency(
    'tracks.thread_track',
    'tracks.slice_group_track');
base.addModuleDependency(
    'tracks.thread_track',
    'tracks.async_slice_group_track');
base.addModuleDependency(
    'tracks.thread_track',
    'filter');
base.addModuleDependency(
    'tracks.thread_track',
    'ui');
base.addModuleStylesheet(
    'tracks.thread_track',
    'tracks.thread_track');
base.addModuleDependency(
    'tracks.process_track',
    'tracks.container_track');
base.addModuleDependency(
    'tracks.process_track',
    'tracks.counter_track');
base.addModuleDependency(
    'tracks.process_track',
    'tracks.object_instance_track');
base.addModuleDependency(
    'tracks.process_track',
    'tracks.thread_track');
base.addModuleDependency(
    'tracks.process_track',
    'filter');
base.addModuleDependency(
    'tracks.process_track',
    'ui');
base.addModuleDependency(
    'tracks.model_track',
    'tracks.container_track');
base.addModuleDependency(
    'tracks.model_track',
    'tracks.cpu_track');
base.addModuleDependency(
    'tracks.model_track',
    'tracks.process_track');
base.addModuleDependency(
    'tracks.model_track',
    'ui');
base.addModuleStylesheet(
    'tracks.model_track',
    'tracks.model_track');
base.addModuleDependency(
    'tracks.ruler_track',
    'tracks.track');
base.addModuleDependency(
    'tracks.ruler_track',
    'tracks.canvas_based_track');
base.addModuleDependency(
    'tracks.ruler_track',
    'ui');
base.addModuleStylesheet(
    'tracks.ruler_track',
    'tracks.ruler_track');
base.addModuleDependency(
    'timeline_track_view',
    'event_target');
base.addModuleDependency(
    'timeline_track_view',
    'measuring_stick');
base.addModuleDependency(
    'timeline_track_view',
    'filter');
base.addModuleDependency(
    'timeline_track_view',
    'selection');
base.addModuleDependency(
    'timeline_track_view',
    'timeline_viewport');
base.addModuleDependency(
    'timeline_track_view',
    'tracks.model_track');
base.addModuleDependency(
    'timeline_track_view',
    'tracks.ruler_track');
base.addModuleDependency(
    'timeline_track_view',
    'ui');
base.addModuleStylesheet(
    'timeline_track_view',
    'timeline_track_view');
base.addModuleDependency(
    'analysis.counter_analysis',
    'analysis.util');
base.addModuleDependency(
    'analysis.counter_analysis',
    'ui');
base.addModuleDependency(
    'analysis.slice_analysis',
    'analysis.util');
base.addModuleDependency(
    'analysis.slice_analysis',
    'ui');
base.addModuleStylesheet(
    'analysis.slice_analysis',
    'analysis.slice_analysis');
base.addModuleDependency(
    'timeline_analysis_view',
    'analysis.counter_analysis');
base.addModuleDependency(
    'timeline_analysis_view',
    'analysis.slice_analysis');
base.addModuleDependency(
    'timeline_analysis_view',
    'analysis.util');
base.addModuleDependency(
    'timeline_analysis_view',
    'ui');
base.addModuleStylesheet(
    'timeline_analysis_view',
    'timeline_analysis_view');
base.addModuleDependency(
    'overlay',
    'ui');
base.addModuleDependency(
    'overlay',
    'event_target');
base.addModuleStylesheet(
    'overlay',
    'overlay');
base.addModuleDependency(
    'category_filter_dialog',
    'filter');
base.addModuleDependency(
    'category_filter_dialog',
    'overlay');
base.addModuleDependency(
    'find_control',
    'timeline_track_view');
base.addModuleDependency(
    'find_control',
    'filter');
base.addModuleDependency(
    'find_control',
    'overlay');
base.addModuleDependency(
    'importer.trace_event_importer',
    'model');
base.addModuleDependency(
    'importer.trace_event_importer',
    'color_scheme');
base.addModuleDependency(
    'importer.linux_perf.bus_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.clock_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.cpufreq_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.disk_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.drm_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.exynos_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.gesture_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.i915_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.mali_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.power_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.sched_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.workqueue_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.android_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf.kfunc_parser',
    'importer.linux_perf.parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'model');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'color_scheme');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.bus_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.clock_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.cpufreq_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.disk_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.drm_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.exynos_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.gesture_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.i915_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.mali_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.power_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.sched_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.workqueue_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.android_parser');
base.addModuleDependency(
    'importer.linux_perf_importer',
    'importer.linux_perf.kfunc_parser');
base.addModuleDependency(
    'importer.v8.codemap',
    'importer.v8.splaytree');
base.addModuleDependency(
    'importer.v8_log_importer',
    'model');
base.addModuleDependency(
    'importer.v8_log_importer',
    'model.slice');
base.addModuleDependency(
    'importer.v8_log_importer',
    'color_scheme');
base.addModuleDependency(
    'importer.v8_log_importer',
    'importer.v8.log_reader');
base.addModuleDependency(
    'importer.v8_log_importer',
    'importer.v8.codemap');
base.addModuleDependency(
    'timeline_view',
    'timeline_track_view');
base.addModuleDependency(
    'timeline_view',
    'timeline_analysis_view');
base.addModuleDependency(
    'timeline_view',
    'category_filter_dialog');
base.addModuleDependency(
    'timeline_view',
    'filter');
base.addModuleDependency(
    'timeline_view',
    'find_control');
base.addModuleDependency(
    'timeline_view',
    'overlay');
base.addModuleDependency(
    'timeline_view',
    'importer.trace_event_importer');
base.addModuleDependency(
    'timeline_view',
    'importer.linux_perf_importer');
base.addModuleDependency(
    'timeline_view',
    'importer.v8_log_importer');
base.addModuleDependency(
    'timeline_view',
    'settings');
base.addModuleStylesheet(
    'timeline_view',
    'timeline_view');
base.addModuleDependency(
    'tracing_controller',
    'event_target');
base.addModuleStylesheet(
    'tracing_controller',
    'tracing_controller');
base.addModuleDependency(
    'profiling_view',
    'timeline_view');
base.addModuleDependency(
    'profiling_view',
    'tracing_controller');
base.addModuleStylesheet(
    'profiling_view',
    'profiling_view');
base.addModuleDependency(
    'test_utils',
    'model.counter');
base.addModuleStylesheet(
    'unittest',
    'unittest');
