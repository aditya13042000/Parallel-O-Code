#include <bits/stdc++.h>
              #include<omp.h>
              using namespace std;
              
              
              int main()
              {
                  int SIZE=1<<8;
                  int A[SIZE];
              
                  for(int i=0;i<SIZE;i++)
                      A[i]=rand()%SIZE;
              
                  int n=SIZE;
                  int i=0,j=0;
                  int first;
                  double start,end;
                  //start=omp_get_wtime();
              
                  for(i=0;i<n-1;i++)
                  {
                      first=i%2;
                      //#pragma omp parallel for default(none),shared(A,first,n)
                      for(j=first;j<n-1;j++)
                      {
                          if(A[j]>A[j+1])
                              swap(A[j],A[j+1]);
                      }
                  }
              
                  //end=omp_get_wtime();
                  cout<<"The sorted array is as follows";
                  for(i=0;i<n;i++)
                  cout<<A[i]<<" ";
                  //cout<<"--------------- Time taken"<<end-start;
              
                  return 0;
              }
