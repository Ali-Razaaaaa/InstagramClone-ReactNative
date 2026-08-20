cmake_minimum_required(VERSION 3.13)

# Define the library name here.
project(appmodules)

# This file includes all the necessary to let you build your application with the New Architecture.
include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)

# Fix for NDK 27 + React Native: explicitly link c++_shared to all autolinked libraries
# so that C++ STL symbols (std::string, __cxa_throw, vtables, etc.) resolve correctly.
find_library(LIBCPP_SHARED c++_shared)

if(LIBCPP_SHARED)
  foreach(autolinked_library ${AUTOLINKED_LIBRARIES})
    target_link_libraries(${autolinked_library} ${LIBCPP_SHARED})
  endforeach()
  target_link_libraries(${CMAKE_PROJECT_NAME} ${LIBCPP_SHARED})
endif()
