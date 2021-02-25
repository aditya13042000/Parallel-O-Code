 #include <bits/stdc++.h>
              #include<omp.h>
              using namespace std;
              
              int main()
              {
              
                  int n,i,j,k;
              
                  cout<<"Enter the size of matrix";
                  cin>>n;
              
                  int a[n][n],b[n][n],c[n][n];
                  for(i=0;i<n;i++)
                  {
                      for(j=0;j<n;j++)
                      {
                          a[i][j]=2;
                          b[i][j]=2;
                          c[i][j]=0;
                      }
                  }
              
                  double start,end;
                  //start=omp_get_wtime();
              
                  //#pragma omp parallel for private(i,j,k) shared(a,b,c)
                  for(i=0;i<n;i++)
                  {
                      for(j=0;j<n;j++)
                      {
                          for(k=0;k<n;k++)
                              c[i][j]+=a[i][k]*b[k][j];
                      }
                  }
              
                  //end=omp_get_wtime();
                  cout<<"The resultant matrix is as follows\n";
                  for(i=0;i<n;i++)
                  {
                      for(j=0;j<n;j++)
                      {
                          cout<<c[i][j]<<" ";
                      }
                      cout<<endl;
                  }
                  //cout<<"--------------- Time taken "<<end-start;
              
                  return 0;
              }
              
