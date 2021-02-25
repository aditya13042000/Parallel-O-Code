#include <omp.h>
              #include <stdio.h>
              #include <stdlib.h>
              //#define MAX_THREADS 8
              
              static long steps = 1000000000;
              double step;
              
              int main () {
              
                  int i,j;
                  double x;
                  double pi, sum = 0.0;
                  //double start, delta;
              
                  double start = omp_get_wtime();
                  step = 1.0/(double) steps;
              
              
                      for (i=0; i < steps; i++)
                      {
                          x = (i+0.5)*step;
                          sum += 4.0 / (1.0+x*x);
                      }
              
                      // Out of the parallel region, finialize computation
                      pi = step * sum;
                      double delta = omp_get_wtime() - start;
                      printf("PI = %.16g computed in %.4g seconds", pi, delta);
              
                      return 0;
              
                  }           
